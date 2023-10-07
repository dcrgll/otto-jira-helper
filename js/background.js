chrome.omnibox.onInputEntered.addListener((text) => {
  console.log('hello from background.js');
  // Encode user input for special characters , / ? : @ & = + $ #

  chrome.storage.local.get(['OTTO_JIRA_BASE_URL']).then((result) => {
    console.log('result', result);

    const textArray = text.split('-');

    const project = textArray[0];
    const issue = textArray[1];
    const baseUrl = result.OTTO_JIRA_BASE_URL;

    const url = `${baseUrl}/browse/${text.toUpperCase()}}`;
    // const url =
    //   baseUrl +
    //   '/projects/' +
    //   project.toUpperCase() +
    //   '/boards/' +
    //   issue.toUpperCase();

    console.log('url', url);

    chrome.tabs.create({ url });
  });
});
