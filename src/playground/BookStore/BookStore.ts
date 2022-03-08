enum MangaType {
	Shounen = "Shounen",
	Shoujo = "Shoujo",
	Seinen = "Seinen",
	Josei = "Josei",
	Kodomomuke = "Kodomomuke"
};

interface IBookList {
	BookID: Number;
	BookName: String;
	BookGenre: MangaType;
	BookDescription: String;
	BookPrice: Number;
};

export let Book01: IBookList = {
	BookID: 1,
	BookName: "The Guide to be the Dragon Master",
	BookGenre: MangaType.Shounen,
	BookDescription: "If you want to be the dragon master, Read it.",
	BookPrice: 233
};



