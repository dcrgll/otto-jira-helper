function start() {
  // get url from input
  const input = document.querySelector('input');

  // add event listener to input
  input.addEventListener('change', (e) => {
    console.log(e.target.value);
  });

  // get button

  const button = document.querySelector('button');

  // add event listener to button

  button.addEventListener('click', (e) => {
    // get url from input
    const input = document.querySelector('input');

    setBaseUrl(input.value);

    chrome.storage.local
      .get(['OTTO_JIRA_BASE_URL'])
      .then((result) => {
        // get saved div and add url to it
        const saved = document.querySelector('#saved');

        if (!result.OTTO_JIRA_BASE_URL) {
          saved.innerHTML = 'No URL saved';
          return;
        }
        saved.innerHTML = result.OTTO_JIRA_BASE_URL;
      });
  });

  if (chrome.storage.local.get(['OTTO_JIRA_BASE_URL'])) {
    chrome.storage.local
      .get(['OTTO_JIRA_BASE_URL'])
      .then((result) => {
        // get saved div and add url to it
        const saved = document.querySelector('#saved');

        if (!result.OTTO_JIRA_BASE_URL) {
          saved.innerHTML = 'No URL saved';
          return;
        }
        saved.innerHTML = result.OTTO_JIRA_BASE_URL;
      });
  }
}

// add base url to local storage
function setBaseUrl(e) {
  chrome.storage.local.set({ OTTO_JIRA_BASE_URL: e }).then().catch();
}

start();
