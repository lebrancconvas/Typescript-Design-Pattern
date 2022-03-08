enum MangaType {
	Shounen,
	Shoujo,
	Seinen
};

interface IBookList {
	BookID: Number;
	BookName: String;
	BookDescription: String;
	BookPrice: Number;
};

export let Book01: IBookList = {
	BookID: 1,
	BookName: "The Guide to be the Dragon Master",
	BookDescription: "If you want to be the dragon master, Read it.",
	BookPrice: 233
};



