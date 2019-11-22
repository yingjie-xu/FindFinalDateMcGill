import pandas as pd

curr = pd.concat(pd.read_excel("final.xlsx", sheet_name=None), ignore_index=True)
curr = curr.drop(columns = "Unnamed: 1")
curr = curr.rename(columns={"Unnamed: 0": str(curr.iloc[2,0])})
curr = curr.rename(columns={"December 2019 - FINAL EXAMINATION SCHEDULE": str(curr.iloc[2,1])})
curr = curr.rename(columns={"Unnamed: 3": str(curr.iloc[2,2])})
curr = curr.rename(columns={"Unnamed: 4": str(curr.iloc[2,3])})
curr = curr.rename(columns={"Unnamed: 5": str(curr.iloc[2,4])})
curr = curr.rename(columns={"Unnamed: 6": str(curr.iloc[2,5])})
curr = curr.drop([0,1,2,38,39,40,77,78,79,116,117,118,155,156,157])
curr.to_json("new1.json")