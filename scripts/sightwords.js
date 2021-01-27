(function () {
  const SIGHT_WORDS = [
    { word: "I", audioResource: "/assets/audio/I.m4a" },
    { word: "a", audioResource: "/assets/audio/a.m4a" },
    { word: "after", audioResource: "/assets/audio/after.m4a" },
    { word: "again", audioResource: "/assets/audio/again.m4a" },
    { word: "all", audioResource: "/assets/audio/all.m4a" },
    { word: "am", audioResource: "/assets/audio/am.m4a" },
    { word: "an", audioResource: "/assets/audio/an.m4a" },
    { word: "and", audioResource: "/assets/audio/and.m4a" },
    { word: "any", audioResource: "/assets/audio/any.m4a" },
    { word: "are", audioResource: "/assets/audio/are.m4a" },
    { word: "as", audioResource: "/assets/audio/as.m4a" },
    { word: "ask", audioResource: "/assets/audio/ask.m4a" },
    { word: "at", audioResource: "/assets/audio/at.m4a" },
    { word: "ate", audioResource: "/assets/audio/ate.m4a" },
    { word: "away", audioResource: "/assets/audio/away.m4a" },
    { word: "be", audioResource: "/assets/audio/be.m4a" },
    { word: "big", audioResource: "/assets/audio/big.m4a" },
    { word: "black", audioResource: "/assets/audio/black.m4a" },
    { word: "blue", audioResource: "/assets/audio/blue.m4a" },
    { word: "brown", audioResource: "/assets/audio/brown.m4a" },
    { word: "by", audioResource: "/assets/audio/by.m4a" },
    { word: "came", audioResource: "/assets/audio/came.m4a" },
    { word: "can", audioResource: "/assets/audio/can.m4a" },
    { word: "come", audioResource: "/assets/audio/come.m4a" },
    { word: "could", audioResource: "/assets/audio/could.m4a" },
    { word: "did", audioResource: "/assets/audio/did.m4a" },
    { word: "do", audioResource: "/assets/audio/do.m4a" },
    { word: "down", audioResource: "/assets/audio/down.m4a" },
    { word: "eat", audioResource: "/assets/audio/eat.m4a" },
    { word: "every", audioResource: "/assets/audio/every.m4a" },
    { word: "find", audioResource: "/assets/audio/find.m4a" },
    { word: "fly", audioResource: "/assets/audio/fly.m4a" },
    { word: "for", audioResource: "/assets/audio/for.m4a" },
    { word: "four", audioResource: "/assets/audio/four.m4a" },
    { word: "from", audioResource: "/assets/audio/from.m4a" },
    { word: "funny", audioResource: "/assets/audio/funny.m4a" },
    { word: "get", audioResource: "/assets/audio/get.m4a" },
    { word: "give", audioResource: "/assets/audio/give.m4a" },
    { word: "go", audioResource: "/assets/audio/go.m4a" },
    { word: "going", audioResource: "/assets/audio/going.m4a" },
    { word: "good", audioResource: "/assets/audio/good.m4a" },
    { word: "had", audioResource: "/assets/audio/had.m4a" },
    { word: "has", audioResource: "/assets/audio/has.m4a" },
    { word: "have", audioResource: "/assets/audio/have.m4a" },
    { word: "he", audioResource: "/assets/audio/he.m4a" },
    { word: "help", audioResource: "/assets/audio/help.m4a" },
    { word: "her", audioResource: "/assets/audio/her.m4a" },
    { word: "here", audioResource: "/assets/audio/here.m4a" },
    { word: "him", audioResource: "/assets/audio/him.m4a" },
    { word: "his", audioResource: "/assets/audio/his.m4a" },
    { word: "how", audioResource: "/assets/audio/how.m4a" },
    { word: "in", audioResource: "/assets/audio/in.m4a" },
    { word: "into", audioResource: "/assets/audio/into.m4a" },
    { word: "is", audioResource: "/assets/audio/is.m4a" },
    { word: "it", audioResource: "/assets/audio/it.m4a" },
    { word: "jump", audioResource: "/assets/audio/jump.m4a" },
    { word: "just", audioResource: "/assets/audio/just.m4a" },
    { word: "know", audioResource: "/assets/audio/know.m4a" },
    { word: "let", audioResource: "/assets/audio/let.m4a" },
    { word: "like", audioResource: "/assets/audio/like.m4a" },
    { word: "little", audioResource: "/assets/audio/little.m4a" },
    { word: "live", audioResource: "/assets/audio/live.m4a" },
    { word: "look", audioResource: "/assets/audio/look.m4a" },
    { word: "make", audioResource: "/assets/audio/make.m4a" },
    { word: "may", audioResource: "/assets/audio/may.m4a" },
    { word: "me", audioResource: "/assets/audio/me.m4a" },
    { word: "must", audioResource: "/assets/audio/must.m4a" },
    { word: "my", audioResource: "/assets/audio/my.m4a" },
    { word: "new", audioResource: "/assets/audio/new.m4a" },
    { word: "no", audioResource: "/assets/audio/no.m4a" },
    { word: "not", audioResource: "/assets/audio/not.m4a" },
    { word: "now", audioResource: "/assets/audio/now.m4a" },
    { word: "of", audioResource: "/assets/audio/of.m4a" },
    { word: "old", audioResource: "/assets/audio/old.m4a" },
    { word: "on", audioResource: "/assets/audio/on.m4a" },
    { word: "once", audioResource: "/assets/audio/once.m4a" },
    { word: "one", audioResource: "/assets/audio/one.m4a" },
    { word: "open", audioResource: "/assets/audio/open.m4a" },
    { word: "our", audioResource: "/assets/audio/our.m4a" },
    { word: "out", audioResource: "/assets/audio/out.m4a" },
    { word: "over", audioResource: "/assets/audio/over.m4a" },
    { word: "play", audioResource: "/assets/audio/play.m4a" },
    { word: "please", audioResource: "/assets/audio/please.m4a" },
    { word: "pretty", audioResource: "/assets/audio/pretty.m4a" },
    { word: "put", audioResource: "/assets/audio/put.m4a" },
    { word: "ran", audioResource: "/assets/audio/ran.m4a" },
    { word: "red", audioResource: "/assets/audio/red.m4a" },
    { word: "ride", audioResource: "/assets/audio/ride.m4a" },
    { word: "round", audioResource: "/assets/audio/round.m4a" },
    { word: "run", audioResource: "/assets/audio/run.m4a" },
    { word: "said", audioResource: "/assets/audio/said.m4a" },
    { word: "saw", audioResource: "/assets/audio/saw.m4a" },
    { word: "say", audioResource: "/assets/audio/say.m4a" },
    { word: "see", audioResource: "/assets/audio/see.m4a" },
    { word: "she", audioResource: "/assets/audio/she.m4a" },
    { word: "so", audioResource: "/assets/audio/so.m4a" },
    { word: "some", audioResource: "/assets/audio/some.m4a" },
    { word: "soon", audioResource: "/assets/audio/soon.m4a" },
    { word: "stop", audioResource: "/assets/audio/stop.m4a" },
    { word: "take", audioResource: "/assets/audio/take.m4a" },
    { word: "thank", audioResource: "/assets/audio/thank.m4a" },
    { word: "that", audioResource: "/assets/audio/that.m4a" },
    { word: "the", audioResource: "/assets/audio/the.m4a" },
    { word: "their", audioResource: "/assets/audio/their.m4a" },
    { word: "them", audioResource: "/assets/audio/them.m4a" },
    { word: "then", audioResource: "/assets/audio/then.m4a" },
    { word: "there", audioResource: "/assets/audio/there.m4a" },
    { word: "they", audioResource: "/assets/audio/they.m4a" },
    { word: "think", audioResource: "/assets/audio/think.m4a" },
    { word: "this", audioResource: "/assets/audio/this.m4a" },
    { word: "three", audioResource: "/assets/audio/three.m4a" },
    { word: "to", audioResource: "/assets/audio/to.m4a" },
    { word: "too", audioResource: "/assets/audio/too.m4a" },
    { word: "two", audioResource: "/assets/audio/two.m4a" },
    { word: "under", audioResource: "/assets/audio/under.m4a" },
    { word: "up", audioResource: "/assets/audio/up.m4a" },
    { word: "walk", audioResource: "/assets/audio/walk.m4a" },
    { word: "want", audioResource: "/assets/audio/want.m4a" },
    { word: "was", audioResource: "/assets/audio/was.m4a" },
    { word: "we", audioResource: "/assets/audio/we.m4a" },
    { word: "well", audioResource: "/assets/audio/well.m4a" },
    { word: "went", audioResource: "/assets/audio/went.m4a" },
    { word: "were", audioResource: "/assets/audio/were.m4a" },
    { word: "what", audioResource: "/assets/audio/what.m4a" },
    { word: "when", audioResource: "/assets/audio/when.m4a" },
    { word: "where", audioResource: "/assets/audio/where.m4a" },
    { word: "white", audioResource: "/assets/audio/white.m4a" },
    { word: "who", audioResource: "/assets/audio/who.m4a" },
    { word: "will", audioResource: "/assets/audio/will.m4a" },
    { word: "with", audioResource: "/assets/audio/with.m4a" },
    { word: "yellow", audioResource: "/assets/audio/yellow.m4a" },
    { word: "yes", audioResource: "/assets/audio/yes.m4a" },
    { word: "you", audioResource: "/assets/audio/you.m4a" },
  ];

  const root = document.getElementById("root");
  let active = null;

  SIGHT_WORDS.forEach(({ word, audioResource }) => {
    const cell = document.createElement("div");
    cell.classList.add("SightWord");
    cell.setAttribute("data-audio-resource", audioResource);
    root.appendChild(cell);

    const text = document.createElement("p");
    text.textContent = word;
    text.classList.add("SightWord__Text");
    cell.appendChild(text);

    const megaphone = document.createElement("div");
    megaphone.classList.add("SightWord__Megaphone");
    cell.appendChild(megaphone);
  });

  root.addEventListener("click", function (e) {
    const sightWord = e.target.closest("[data-audio-resource]");
    if (sightWord === null) {
      return;
    } else if (active !== null) {
      active.node.classList.remove("SightWord--active");
      active.audio.pause();
    }

    const audioResource = sightWord.getAttribute("data-audio-resource");
    const audio = new Audio(audioResource);

    sightWord.classList.add("SightWord--active");
    audio.play();
    audio.addEventListener("ended", function () {
      sightWord.classList.remove("SightWord--active");
    });

    active = {
      audio: audio,
      node: sightWord,
    };
  });
})();
