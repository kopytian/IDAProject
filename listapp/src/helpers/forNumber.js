export function thousands_separators(num) {
  let num_string = String(num) ;
  num_string = num_string.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  return num_string;
}