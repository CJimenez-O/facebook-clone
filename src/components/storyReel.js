import React from "react";
import "../styles/storyReel.css";
import Story from "./story";

function storyReel() {
  return (
    <div className="storyReel">
      <Story
        image="https://media.newyorker.com/photos/5909769a1c7a8e33fb38f796/master/pass/Wenger-Silicon-Valley.jpg"
        profile="https://imgix.bustle.com/2017/4/20/abbef9a5-0d92-4176-977f-575a2914c5b2.jpg?w=800&fit=crop&crop=faces&auto=format%2Ccompress"
        title="Richard Hendricks"
      />
      <Story
        image="https://kidslox.com/wp-content/uploads/2018/11/imgpsh_fullsize.jpg"
        profile="https://news-cdn.softpedia.com/images/news2/Guess-Who-Doesn-t-Like-the-Apple-Watch-464719-2.jpg"
        title="Steve Woz"
      />
      <Story
        image="https://www.livemint.com/rf/Image-621x414/LiveMint/Period1/2015/03/10/Photos/timcookapple-kF3F--621x414@LiveMint.jpg"
        profile="https://images.barrons.com/im-225735?width=1280&size=1"
        title="Tim Cook"
      />
      <Story
        image="https://www.financemagnates.com/wp-content/uploads/2021/03/DogeCoin-header-min.jpg"
        profile="https://i.kym-cdn.com/entries/icons/original/000/027/100/_103330503_musk3.jpg"
        title="Elon Musk"
      />
      <Story
        image="https://learnodo-newtonic.com/wp-content/uploads/2018/10/Bill-Gates-on-Fortune-magazine-cover-July-21-1986.jpg"
        profile="https://i.pinimg.com/originals/4d/b6/f3/4db6f3360f7cc92a74da20c88f026a1f.jpg"
        title="Bill Gates"
      />
    </div>
  );
}

export default storyReel;
