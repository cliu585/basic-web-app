export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("andrew id")) {
    return (
      "My Andrew ID is cyl2."
    );
  }

  if (query.toLowerCase().includes("name")) {
    return (
      "cliu"
    );
  }

  if (query.toLowerCase().includes("largest")) {
    query.replace( /[^\d.]/g, '' );
    let arr = query.split(',');
    let greatest = Math.max(parseInt(arr[0]), parseInt(arr[1]), parseInt(arr[2]));
    return (
      greatest.toString()
    );
  }

  if (query.toLowerCase().includes("plus")) {
    let i = query.indexOf(" plus ");
    let arr = query.split(" plus ");
    let num1 = arr[0].replace( /[^\d.]/g, '' );
    let num2 = arr[1].replace( /[^\d.]/g, '' );
    let res = num1 + num2;
    return (
      res.toString()
    );
  }

  return "";
}
