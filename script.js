const dogInfo = async function fetchData() {
  const Importurl = "https://dog.ceo/api/breeds/image/random";

  try {
    const response = await fetch(Importurl);
    if (!response.ok) {
      throw new Error("error");
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("error fetching data:", error);
  }
};

dogInfo();

const me = "tony";
console.log(me);
