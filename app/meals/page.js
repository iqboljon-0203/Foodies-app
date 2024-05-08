import Link from "next/link";
import classes from "./page.module.css"; 
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";
export const metadata = {
  title: 'All meals',
  description: 'Browse the delicious meals shared by our vibrant community!',
};
async function Meals(){
  const meals=await getMeals();
  return <MealsGrid meals={meals}></MealsGrid>
}
export default function MealsPage(){
    return (
        <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created  {" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>Chooose your recepi and cook it yourself.It is easy and fun</p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share your favourite Recepi</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<p className={classes.loading}>Fetching data...</p>}>
          <Meals></Meals>
        </Suspense>
      </main>
    </>
    )
}