// DONE: Configure routes for this app with page.js, by registering each URL your app can handle,
// linked to a a single controller function to handle it:

page('/', articlesController.index);

page('/about', aboutController.index);

page('/githubFollowers', aboutController.followers);

// DONE: Activate page.js!
page();
