export default function MainUrl(country){
return(
"https://corona.lmao.ninja/v2/countries/" +
    country +
    "?yesterday=true&strict=true&query"
  );
}