/**
 * @description Eine Webcomponent um einen Mastodon Feed darzustellen.
 * @author Felix Schürmeyer
 * @date 27/12/2022
 */
"use strict";

class TootFeed extends HTMLElement {
  constructor() {
    super();

    let content = this.textContent.split("@");

    if (content[0] == "") {
      content.shift();
    }

    if (content.length !== 2) {
      this.innerHTML = `<p>Username is not Valid!</p>`;

      return;
    }

    this.username = content[0];
    this.instance = content[1];

    let refreshRate = parseInt(this.getAttribute("refresh-rate"));

    if (refreshRate > 0 && refreshRate != null) {
      this.refreshRate = refreshRate;
    } else {
      this.refreshRate = 30000;
    }

    let hostInstance = this.getAttribute("host");

    if (hostInstance != null) {
      this.instance = hostInstance;
    }

    this.innerHTML = "";
    this.url =
      `https://${this.instance}/api/v2/search?q=${this.username}&limit=40&type=accounts`;
  }

  connectedCallback() {
    this.getUserData();
  }

  getUserData() {
    fetch(this.url).then((request) => request.json()).then((data) => {
      let accounts = data["accounts"].filter((item) => {
        return item.url == `https://${this.instance}/@${this.username}`;
      });

      if (accounts.length != 1) {
        this.innerHTML = `<p>Es wurde kein passender Account gefunden.</p>`;
        return;
      }

      this.userid = accounts[0].id;

      this.fetchFeed();
    }).catch(this.renderError.bind(this));
  }

  fetchFeed() {
    if (!this.userid) {
      return;
    }

    fetch(`https://${this.instance}/api/v1/accounts/${this.userid}/statuses`)
      .then((request) => request.json()).then(this.renderFeed.bind(this)).catch(
        this.renderError.bind(this),
      );
  }

  renderError(error) {
    this.innerHTML = error;
  }

  async renderFeed(jsonResponse) {
    this.innerHTML = "";

    jsonResponse.forEach((element) => {
      let contentToot = document.createElement("div");

      contentToot.classList.add("tooted");

      if (element.reblog) {
        contentToot.innerHTML =
          `<span class="content">${element.reblog.content}</span>`;

        let timeString = new Date(element.reblog.created_at).toLocaleString();

        this.addMediaAttachments(contentToot, element.reblog);

        contentToot.innerHTML +=
          `<small>reblog <a href="${element.reblog.account.url}">${element.reblog.account.username}</a> - ${timeString} </small>`;
      } else {
        contentToot.innerHTML =
          `<span class="content">${element.content}</span>`;

        let timeString = new Date(element.created_at).toLocaleString();

        this.addMediaAttachments(contentToot, element);

        contentToot.innerHTML += `<small>${timeString}</small>`;
      }

      this.appendChild(contentToot);
    });

    setTimeout((_) => {
      this.fetchFeed();
    }, this.refreshRate);
  }

  addMediaAttachments(contentToot, element) {
    if (element.media_attachments.length > 0) {
      element.media_attachments.forEach((media) => {
        if (media.type === "image") {
          contentToot.innerHTML +=
            `<img loading="lazy" src="${media.url}" alt="${media.description}"></img>`;
        }
      });
    }
  }
}

customElements.define("toot-feed", TootFeed);
