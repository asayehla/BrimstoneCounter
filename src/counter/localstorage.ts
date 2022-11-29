
export const getXPFromLocalStorage = (): number => {
    const startvalue = 0;
    try {
      const serialisedXPState = localStorage.getItem('XP');

    if (localStorage.length == 0 || localStorage.getItem('XP')?.length == 0){ return startvalue; }
      const initialXp = Number(serialisedXPState);
      return initialXp;
    
    } catch (e) {
      console.warn(e);
      return startvalue;
    }
  };


export const getMoneyFromLocalStorage = (): number => {
    const startvalue = 0;
    try {
      const serialisedMoneyState = localStorage.getItem('Money');

    if (localStorage.length == 0 || localStorage.getItem('Money')?.length == 0){ return startvalue; }
      const initialMoney = Number(serialisedMoneyState);
      return initialMoney;
    
    } catch (e) {
      console.warn(e);
      return startvalue;
    }
  };
  