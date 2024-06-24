{
  description = "Construct development shell from requirements.txt";
  inputs = {

    nixpkgs.url = "github:NixOS/nixpkgs/nixos-24.05-small";
    flake-utils.url = "github:numtide/flake-utils";

  pyproject-nix.url = "github:nix-community/pyproject.nix";
  pyproject-nix.inputs.nixpkgs.follows = "nixpkgs";
  };

  outputs =
    { self, nixpkgs, flake-utils
    , pyproject-nix
    }:
    flake-utils.lib.eachDefaultSystem
      (system:
    let
      project = pyproject-nix.lib.project.loadRequirementsTxt {
        projectRoot = ./.;
      };

          pkgs = import nixpkgs {
            inherit system;
          };
      python = pkgs.python3;

      pythonEnv =
        #assert project.validators.validateVersionConstraints { inherit python; } == { }; (
          pkgs.python3.withPackages (project.renderers.withPackages {
            inherit python;
          })
        #);
        ;

    in
    with pkgs;
    {
        packages.dashboard = pkgs.stdenv.mkDerivation {
          name = "docs";
          src = self;
          buildPhase = "${pythonEnv}/bin/python automation/finanse/dashboard.py --source_path=automation/finanse";
          installPhase = "cp layouts/shortcodes/finanse.html $out";
        };
        defaultPackage = self.packages.${system}.dashboard;
      devShells.default =
        mkShell {
          buildInputs = [
            pythonEnv
          ];
        };
    }
);
}
