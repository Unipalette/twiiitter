import React from "react";
function Home() {
  return (
    <div>
      <form>
        <input type="text" placeholder="What's on your mind?" maxLength={120} />
        <input type="submit" value="tweeet"></input>
      </form>
    </div>
  );
}
export default Home;
