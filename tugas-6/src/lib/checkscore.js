export const checkScore = (data) => {
  let name = data[0].split(":")[1];
  let kelas = data[1].split(":")[1];
  let score = data[2].split(":")[1];

  return {
    name,
    kelas,
    score,
  };
};
