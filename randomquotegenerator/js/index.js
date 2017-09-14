var quotes = [
  ["Only I can change my life. No one can do it for me.", "Carol Burnett"],
  [
    "There is only one happiness in this life, to love and be loved.",
    "George Sand"
  ],
  [
    "Life is 10% what happens to you and 90% how you react to it.",
    "Charles R. Swindoll"
  ],
  [
    "The greatest gift of life is friendship, and I have received it.",
    "Hubert H. Humphrey"
  ],
  [
    "Learn to enjoy every minute of your life. Be happy now. Don't wait for something outside of yourself to mkae you happy in the future. Think how really precious is the time you have to spend whether it's at work or with your family. Every minute should be enjoyed and savored.",
    "Earl Nightingale"
  ],
  [
    "We must let go of the life we have planned, so as to accept the one that is waiting for us.",
    "Joseph Campbell"
  ],
  [
    "Infuse your life with action. Don't wait for it to happen. Make it happen. Make your own future. Make your own hope. Make your own love. And whatever your beliefs, honor your creator, not by passively waiting for grace to come down from upon high, but by doing what you can to make grace happen... yourself, right now, right down here on Earth.",
    "Bradley Whitford"
  ],
  [
    "Smile in the mirror. Do that every morning and you'll start to see a big difference in your life.",
    "Yoko Ono"
  ],
  [
    "Life isn't about finding yourself. Life is about creating yourself",
    "George Bernard Shaw"
  ],
  ["Be happy for this moment. This moment is your life", "Omar Khayyam"]
];

function randomQuote() {
  var rng = Math.floor(Math.random() * quotes.length);
  document.getElementById("showQuote").innerHTML = quotes[rng][0];
  document.getElementById("author").innerHTML = quotes[rng][1];
  
  var tweetDiv = document.querySelector(".twitter-share-button");
  var link = document.createElement("a");
  link.setAttribute("href", "https://twitter.com/share");
  link.setAttribute("class", "twitter-share-button");
  link.setAttribute("id", "twitter");
  link.setAttribute(
    "data-text",
    '"' + quotes[rng][0] + '" - ' + quotes[rng][1]
  );
  link.setAttribute("data-url", "http://codepen.io/rledo");
  
  tweetDiv.replaceWith(link);
  twttr.widgets.load();
}

!(function(d, s, id) {
  var js,
    fjs = d.getElementsByTagName(s)[0];
  if (!d.getElementById(id)) {
    js = d.createElement(s);
    js.id = id;
    js.src = "//platform.twitter.com/widgets.js";
    fjs.parentNode.insertBefore(js, fjs);
  }
})(document, "script", "twitter-wjs");