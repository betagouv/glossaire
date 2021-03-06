// every found Sigle is rerender in a following matchNode
export function createMatchNode(text) {
  var match = document.createElement("span");
  match.className = "glossary-term-match";
  match.innerHTML = text;
  match.style.borderBottom = "1px dotted";
  match.style.backgroundImage = `url(
      'data:image/svg+xml;utf8,<svg height="15" width="15" viewBox="0 0 510 510" xmlns="http://www.w3.org/2000/svg"><path d="m495.523 121.677c-.959-.033-20.656-.698-49.57-.059v-59.282c0-8.739-7.462-15.67-16.248-14.948-57.652 4.813-131.001 30.288-174.705 76.753-43.704-46.465-117.053-71.94-174.705-76.753-8.77-.714-16.248 6.186-16.248 14.948v60.885c-16.428-.62-31.967-1.057-48.602-1.546-8.39-.265-15.445 6.493-15.445 14.993v273.17c0 7.894 6.117 14.437 13.993 14.966 59.668 4.016 159.617 4.468 235.123 36.672 6.729 2.874 12.77-.427 11.77 0 75.504-32.203 175.435-32.654 235.123-36.672 7.875-.529 13.993-7.072 13.993-14.966v-273.17c-.002-8.081-6.403-14.709-14.479-14.991zm-79.57-42.47v257.088c-43.256 9.676-98.075 30.324-145.953 74.105 0-13.205 0-250.695 0-257.837 32.82-40.95 94.976-65.632 145.953-73.356zm-321.906 0c50.977 7.724 113.133 32.406 145.953 73.356v257.837c-47.878-43.781-102.697-64.429-145.953-74.105zm-64.047 316.516v-243.607c10.741.318 22.229.677 34.047 1.128v195.277c0 7.217 5.14 13.411 12.233 14.742 34.251 6.429 78.791 20.383 120.303 50.429-59.225-13.283-121.217-15.418-166.583-17.969zm450 0c-45.292 2.547-107.335 4.68-166.584 17.969 41.512-30.046 86.053-44 120.303-50.429 7.093-1.331 12.233-7.525 12.233-14.742v-196.893c13.806-.309 25.565-.313 34.047-.236v244.331z"/><path d="m201.107 187.116c-11.618-8.094-31.647-18.029-53.022-21.641-8.165-1.386-15.909 4.123-17.29 12.291-1.38 8.168 4.123 15.909 12.292 17.289 16.503 2.789 32.331 10.726 40.871 16.676 6.795 4.734 16.145 3.066 20.882-3.733 4.735-6.797 3.064-16.147-3.733-20.882z"/><path d="m199.605 271.586c-10.689-6.527-31.596-17.981-51.52-21.348-8.165-1.384-15.909 4.122-17.29 12.291-1.38 8.169 4.123 15.909 12.292 17.289 15.521 2.623 33.76 13.021 40.881 17.371 7.079 4.321 16.307 2.079 20.62-4.983 4.318-7.07 2.087-16.301-4.983-20.62z"/><path d="m326.042 211.731c8.54-5.95 24.368-13.887 40.871-16.676 8.168-1.38 13.671-9.121 12.292-17.289-1.38-8.169-9.124-13.68-17.29-12.291-21.375 3.611-41.404 13.547-53.022 21.641-6.797 4.735-8.468 14.085-3.733 20.882 4.738 6.801 14.091 8.465 20.882 3.733z"/><path d="m361.915 250.239c-19.924 3.366-40.831 14.82-51.52 21.348-7.07 4.318-9.301 13.55-4.983 20.62 4.318 7.069 13.549 9.3 20.62 4.983 7.121-4.35 25.36-14.748 40.881-17.371 8.168-1.38 13.671-9.12 12.292-17.289-1.381-8.169-9.124-13.68-17.29-12.291z"/></svg>'
    )`;
  match.style.backgroundPosition = "100% center";
  match.style.backgroundRepeat = "no-repeat";
  match.style.paddingRight = "17px";
  match.onclick = function () {
    window.glossaireInterface.search(text);
  };
  match.style.cursor = "help";
  return match;
}

export function createTextNode(text) {
  return document.createTextNode(text);
}

// lateral panel
export function createWrapperNode(wrapperId, searchTermId, resultsId) {
  var wrapper = document.createElement("div");
  wrapper.id = wrapperId;
  wrapper.innerHTML =
    // lets build this only on click, not to interfere with SEO
    `
      <style>
        #${wrapperId} h2, #${wrapperId} p, #${wrapperId} a, #${wrapperId} input[type='text'] {
          padding:0;
          margin:0;
          border: none;
          font-size: 100%;
          font: inherit;
          vertical-align: baseline;
          box-shadow: none;
        }
        #${wrapperId} :focus {
          outline: 0;
        }

        #${wrapperId} {
          font-size:1rem;
          color:#f3f3f3 !important;
          position:fixed;
          right:0;
          top:0;
          height:100vh;
          width:100%;
          max-width:350px;
          z-index:10000000;
          background-color: #071728;
        }
        #${wrapperId} * {
          box-sizing: border-box;
        }

        #${wrapperId} > div:not(.glossaire-footer) {
          height:100vh;
          overflow-x:auto;
        }

        #${wrapperId} .glossaire-close {
          display:flex;
          justify-content:flex-end;
          cursor:pointer;
          padding:20px 35px 0;
        }

        #${wrapperId} > div > h2 {
          padding:0 35px 20px;
          color: #f3f3f3;
          font-size:1.4rem;
          font-line: 2rem;
          margin: 20px 0 0 0;
          width:100%;
          border-bottom:1px dashed #536373;
        }

        #${wrapperId}> div > div > h3 {
          color: #f3f3f3;
          font-size:1.6rem;
          font-line: 2rem;
          padding-bottom: 0;
          margin: 0;
        }

        #${wrapperId} > div >div {
          padding:20px 35px;
        }

        #${wrapperId} p {
          margin:10px 0 10px 0;
        }
        #${wrapperId} p.glossaire-small {
          font-size:0.9rem;
        }

        #${wrapperId} a {
          color:#f3f3f3 !important;
          text-decoration:underline;
          font-size:0.9rem;
          box-shadow: none !important;
        }

        #${wrapperId} .glossaire-definitions {
          margin:20px 0 10px 0;
        }

        #${wrapperId} .glossaire-definitions p.glossary-definition {
          margin:10px 0 5px 0;
        }

        #${wrapperId} .glossaire-definitions > div:not(:last-of-type) {
          padding-bottom: 20px;
          margin: 15px 0;
          border-bottom: 1px solid #373f48;
        }
        #${wrapperId} .glossaire-definitions > div:last-of-type {
          margin-bottom: 50px;
        }
        #${wrapperId} .glossaire-footer {
          position:absolute;
          bottom:0;
          right:0;
          padding: 15px 35px;
          background-color: #071728;
          border-top:1px dashed #536373;
          width: 100%;
        }
      </style>
      <div>
      <div class="glossaire-close" onclick='window.glossaireInterface.hide()'><span>Fermer ✖︎</span></div>
      <h2>Glossaire de l’administration</h2>
      <div>
        <h3 id="${searchTermId}">Terme</h3>
        <p class="glossaire-small"><i>Cet acronyme signifie, selon le contexte :</i></p>
        <div id="${resultsId}" class="glossaire-definitions">
        </div>
      </div>
      </div>
      <div class="glossaire-footer"><a target="_blank" rel="noreferrer noopoener" href="https://betagouv.github.io/glossaire">Code source disponible sur Github</a></div>
    `;
  return wrapper;
}

// sigle definition render within the wrapper
export function createResultNode(definition, source, url) {
  var node = document.createElement("div");
  node.innerHTML = `
    <div>
      <p class="glossary-definition">${definition}</p>
      <a target="_blank" rel="roreferrer noopener" href="${url}"><i>Source : ${source}</i></a>
    </div>`;
  return node;
}
