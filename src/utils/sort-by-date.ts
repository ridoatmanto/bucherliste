export function SortByDate(arr: any) {
  return arr.sort((a: any, b: any) => {
    if (Number(new Date(a.updatedAt)) < Number(new Date(b.updatedAt))) {
      return 1;
    }
    if (Number(new Date(a.updatedAt)) > Number(new Date(b.updatedAt))) {
      return -1;
    }
    return 0;
  });
}
