import React, { useState, useEffect } from 'react';

export function Component() {
  const [principlesTaught, setPrinciplesTaught] = useState(3);
  const [principlesPerVisit, setPrinciplesPerVisit] = useState(3);
  const [daysBetweenVisits, setDaysBetweenVisits] = useState(7);

  const [principlesToTeach, setPrinciplesToTeach] = useState(37);
  const [daysToBaptism, setDaysToBaptism] = useState(86.3);

  useEffect(() => {
    const calculatedPrinciplesToTeach = 40 - principlesTaught;
    setPrinciplesToTeach(calculatedPrinciplesToTeach);

    const calculatedDaysToBaptism = (calculatedPrinciplesToTeach / principlesPerVisit) * daysBetweenVisits;
    setDaysToBaptism(calculatedDaysToBaptism);
  }, [principlesTaught, principlesPerVisit, daysBetweenVisits]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 px-4 py-8 dark:bg-gray-900">
      <div className="mx-auto w-full max-w-md rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
        <h1 className="mb-6 text-3xl font-bold text-gray-900 dark:text-gray-50">Baptism Days Calculator</h1>
        <form className="space-y-4">
          <div>
            <label
              className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-400"
              htmlFor="principles-taught">
              Principles Taught
            </label>
            <input
              className="block w-full rounded-md border border-gray-200 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              id="principles-taught"
              min="0"
              type="number"
              value={principlesTaught}
              onChange={(e) => setPrinciplesTaught(Number(e.target.value))}
              placeholder="Enter the number of principles taught"
            />
          </div>
          <div>
            <label
              className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-400"
              htmlFor="principles-per-visit">
              Principles Taught per Visit
            </label>
            <input
              className="block w-full rounded-md border border-gray-200 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              id="principles-per-visit"
              min="0"
              type="number"
              value={principlesPerVisit}
              onChange={(e) => setPrinciplesPerVisit(Number(e.target.value))}
              placeholder="Enter the number of principles taught per visit"
            />
          </div>
          <div>
            <label
              className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-400"
              htmlFor="days-between-visits">
              Days Between Visits
            </label>
            <input
              className="block w-full rounded-md border border-gray-200 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              id="days-between-visits"
              min="0"
              type="number"
              value={daysBetweenVisits}
              onChange={(e) => setDaysBetweenVisits(Number(e.target.value))}
              placeholder="Enter the number of days between visits"
            />
          </div>
        </form>
      </div>
      <div className="mt-8 w-full max-w-md rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
        <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-gray-50">Results</h2>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-gray-700 dark:text-gray-400">Days to Baptism:</span>
            <span className="font-bold text-gray-900 dark:text-gray-50">
              <span id="days-to-baptism">{daysToBaptism.toFixed(1)}</span> days
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-700 dark:text-gray-400">Principles to Teach:</span>
            <span className="font-bold text-gray-900 dark:text-gray-50">
              <span id="principles-to-teach">{principlesToTeach}</span>
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
