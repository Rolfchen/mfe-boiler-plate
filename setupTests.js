import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import chai from "chai";
import chaiEnzyme from "chai-enzyme";
import sinonChai from "sinon-chai";
import chaiAsPromised from "chai-as-promised";
import chaiShallowDeepEqual from "chai-shallow-deep-equal";
import chaiDatetime from "chai-datetime";

configure({ adapter: new Adapter() });

chai.use(sinonChai);
chai.use(chaiAsPromised);
chai.use(chaiShallowDeepEqual);
chai.use(chaiEnzyme);
chai.use(chaiDatetime);

process.env.DB_PATH = "mongodb://localhost:27017";
process.env.DB_NAME = "FFIDev2";
