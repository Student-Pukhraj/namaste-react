import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <h2>This is the namaste React Series</h2>
      <User name={"Pukhraj Jharotiya (function) "} />
      <UserClass name={"Pukhraj Jharotiya (Class) "} location={"Jaipur Class"} />
    </div>
  );
};

export default About;
