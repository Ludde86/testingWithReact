import Ensyme from "enzyme";
import ensymeAdapter from "enzyme-adapter-react-16";

// configure Ensyme
// this accepts an object where we will set the adapter to a new instance of our ensyme adaptor,
// and then we disable lifecycle method, so we set it to true.
Ensyme.configure({
  adapter: new ensymeAdapter(),
  disableLifecycleMethods: true
});
