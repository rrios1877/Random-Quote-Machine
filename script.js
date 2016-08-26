var quotes = [
  { quote:"I've been called the songbird of my generation by people who've heard me. THAT GOOD.", author:"   -Brennan Huff,",       movie:" Step Brothers" },       
  { quote:"That's so funny the last time I heard that I laughed so hard I fell off my dinosaur.", author:" -Dale Doback,",      movie:" Step Brothers"},         
  { quote:"Shake n Bake!",author:" -Cal Naughton Jr.,", movie:" Talladega Nights"},                                             
  { quote:"If you ain't first  you're last!", author:" -Ricky Bobby,",movie:" Talladega Nights"},
  { quote:"I like to picture my Jesus in a tuxedo t-shirt because it says like, I wanna be formal, but I'm here to party too.", author:" -Cal Naughton Jr.,",movie:" Talladega Nights" },
  { quote:"Don't you put that evil on me Ricky Bobby!", author:" -Lucius Washington,",movie:" Talladega Nights"},
  { quote:"I'm just a big hary American winning machine, you know?", author:" -Ricky Bobby,",movie:" Talladega Nights"},
  { quote:"I don't know how to put this, but I'm kind of a big deal.",author:" -Ron Burgundy,",movie:" Anchorman"},
  { quote:"They've done studies, you know. 60 percent of the time, it works. Everytime.",author:" -Brian Fantana,",movie:" Anchorman"},
  { quote:"Yep, it's made with bits of real Panther so you know it's good. ",author:" -Brian Fantana,", movie:" Anchorman"},
  { quote:"Hey! Where did you get those clothes? The toilet store?",author:" -Brick Tamland,", movie:" Anchorman"},
  { quote:"Well if you were a man I'd punch you. Punch you right in the mouth.",author:" -Ron Burgundy,",movie:" Anchorman"},
  { quote:"I'll take your mother, Dorothy Mantooth, out for a nice seafood dinner and never call her again. ",author:" -Champ Kind,",movie:" Anchorman"},
  { quote:"I love lamp.",author:" -Brick Tamland,", movie:" Anchorman"},
  {quote:"MA, the meatloaf! We want it!", author:" -Chazz Reinhold,",movie:" Wedding Crashers"},
  {quote:"I almost nunchucked you, You don't even realize!", author:" -Chazz Reinhold,",movie: " Wedding Crashers"},
  {quote:"Rule #76: No Excuses, play like a champion!", author:" -Jeremy Grey,", movie:" Wedding Crashers"},
  {quote:"I'd like to be pimps from Oakland or cowboys from Arizona but it's not Halloween. Grow up Peter Pan, Count Chocula.",author:" -John Beckwith,",movie:" Wedding Crashers"},
  {quote:"Just liv'n the dream.",author:" -Chazz Reinhold,", movie:" Wedding Crashers"},
  {quote:"Rule # 6: Do not sit in the corner and sulk. It draws attention in a negative way. Draw attention to yourself, but on your own terms.",author:" -Jeremy Grey,",movie:" Wedding Crashers"},
  {quote:"No one knows what it means, but it's provocative! Gets the people go'n!", author:" -Chazz Michael Michaels,",movie:"   Blades of Glory"},
  {quote:"I'll get inside your face!",author:" -Chazz Michael Michaels,",movie:" Blades of Glory"},
  {quote:"Zip it Chazz, just zip it, or I'll punch you in your crap-lousy face!", author:" -Jimmy MacElroy,",movie:" Blades of Glory"},
  {quote:"I don't even remember Oslo.",author:" -Chazz Michael Michaels,",movie:" Blades of Glory"}
  
];
var displayedQuote;
var currentIdx;

function updateQuote() {
  do{
  var idx = Math.floor(Math.random() * quotes.length);
  }
  while(currentIdx===idx);
  
  displayedQuote = quotes[idx];
  
  currentIdx = idx;
  $('.quote').html(quotes[idx].quote);
  $('.author').html(quotes[idx].author);
  $('.movie').html(quotes[idx].movie);
}
function shareTweet(){
  var quoteToTweet = quotes[currentIdx].quote;
  if(quoteToTweet.length > 100){
    quoteToTweet=quoteToTweet.substr(0, 100).match(/(^.+)\s/)[1] + "...";
  }
  quoteToTweet = encodeURI("\"" +quoteToTweet+"\"")
  window.open("https://twitter.com/intent/tweet?text=" + quoteToTweet);
}
$(function(){
  updateQuote();
  $('#newQuote').click(updateQuote);
  $('#tweet').click(shareTweet);

  });


