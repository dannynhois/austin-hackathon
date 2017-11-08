const NaturalLanguageUnderstandingV1 = require("watson-developer-cloud/natural-language-understanding/v1.js");
const natural_language_understanding = new NaturalLanguageUnderstandingV1({
  username: "778e6e8c-e1ad-4a25-9077-89796c50cb80",
  password: "Z2UI6vCi44Lv",
  version_date: "2017-02-27"
});

// const url = "https://medium.freecodecamp.org/so-whats-this-graphql-thing-i-keep-hearing-about-baf4d36c20cf";
const url = "https://www.yahoo.com/sports/regarding-liangelo-ball-ucla-case-experts-caution-reading-much-development-170904555.html";
const parameters = {
  url:url,
  features: {
    entities: {
      emotion: true,
      sentiment: true,
      limit: 2
    },
    keywords: {
      emotion: true,
      sentiment: true,
      limit: 20
    }
  }
};

natural_language_understanding.analyze(parameters, function(err, response) {
  if (err) console.log("error:", err);
  else console.log(JSON.stringify(response, null, 2));
});