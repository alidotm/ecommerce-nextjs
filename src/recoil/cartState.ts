import { atom } from "recoil";

const cartState = atom({
	key: "cartState",
	default: false,
});

export default cartState;
