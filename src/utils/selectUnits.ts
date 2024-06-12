export const selectUnits = (type: string, value: number): string => {
  let result = "";
  if (type === "category") {
    if (value === 1) result = "일상요리";
    else if (value === 2) result = "건강요리";
    else if (value === 3) result = "디저트";
    else if (value === 4) result = "야식";
    else if (value === -1) result = "카테고리";
  } else if (type === "unit") {
    if (value === 0) result = "개";
    else if (value === 1) result = "컵";
    else if (value === 2) result = "큰술";
    else if (value === 3) result = "작은술";
    else if (value === 4) result = "티스푼";
    else if (value === 5) result = "ml";
    else if (value === 6) result = "g";
    else if (value === 7) result = "꼬집";
    else if (value === -1) result = "단위";
  }
  return result;
};
