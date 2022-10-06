import { dbService } from "fBase";
import React, { useEffect, useState } from "react";
function Home() {
  const [tweeet, setTweet] = useState("");
  const [tweeets, setTweeets] = useState([]);
  const getTweeets = async () => {
    const dbTweeets = await dbService.collection("tweeets").get();
    dbTweeets.forEach((document) => {
      const tweeetObject = {
        ...document.data(),
        id: document.id,
      };
      setTweeets((prev) => [tweeetObject, ...prev]);
    });
  };

  useEffect(() => {
    getTweeets();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await dbService.collection("tweeets").add({
      tweeet,
      createdAt: Date.now(),
    });
    setTweet("");
  };
  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setTweet(value);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={tweeet}
          type="text"
          placeholder="What's on your mind?"
          maxLength={120}
        />
        <input type="submit" value="tweeet"></input>
      </form>
      <div>
        {tweeets.map((tweeet) => (
          <div key={tweeet.id}>
            <h4>{tweeet.tweeet}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Home;
