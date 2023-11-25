/* eslint-disable react/prop-types */

import axios from "axios";
import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
const RevelationOrderComp = () => {
    const [wordCharData, setWordCharData] = useState([]);

    useEffect(() => {
        const getWordsAndChar = async () => {
            try {
                const response = await axios.get(
                    "https://merciful123.github.io/quran/index.json"
                );
                const sortedBasedOnRevelationOrder = response.data.slice().sort((a,b)=>a.revelation_order - b.revelation_order)
                setWordCharData(sortedBasedOnRevelationOrder);
            } catch (error) {
                console.error(error);
            }
        };
        getWordsAndChar();
    }, []);

    const sortedOnRevelationOrder = wordCharData.slice().sort((a, b) => a.revelation_order - b.revelation_order)
    
    console.log(sortedOnRevelationOrder)

    // console.log(wordCharData[0]);
    // console.log(typeof wordCharData);

    //  generating fibonacci number

    function fibonacciLengthUpToLimit(limit) {
        let fibSequence = [0, 1];

        for (let i = 2; fibSequence[i - 1] + fibSequence[i - 2] <= limit; i++) {
            fibSequence[i] = fibSequence[i - 1] + fibSequence[i - 2];
        }

        return fibSequence.length;
    }

    function fibonacciUpToLimit(limit) {
        let fibSequence = [0, 1];

        for (let i = 2; fibSequence[i - 1] + fibSequence[i - 2] <= limit; i++) {
            fibSequence[i] = fibSequence[i - 1] + fibSequence[i - 2];
        }

        return fibSequence.join(" ").split(",  ");
    }

    // Example: Print Fibonacci numbers up to 50
    const limit = 10938;
    const result = fibonacciLengthUpToLimit(limit);
    console.log(`Fibonacci numbers up to ${limit}:`, result);

    function generatePrimesLengthUpToLimit(limit) {
        const primes = [];

        for (let i = 2; i <= limit; i++) {
            if (isPrime(i)) {
                primes.push(i);
            }
        }

        return primes.length;
    }

    function generatePrimesUpToLimit(limit) {
        const primes = [];

        for (let i = 2; i <= limit; i++) {
            if (isPrime(i)) {
                primes.push(i);
            }
        }

        return primes.join(" ").split(", ");
    }

    function isPrime(number) {
        if (number <= 1) {
            return false;
        }

        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                return false;
            }
        }

        return true;
    }

    // Example: Get prime numbers up to 50
    // const limitPrime = 74;
    // const limitPrime = 10938;

    // const primeNumbers = generatePrimesLengthUpToLimit(limitPrime);
    // console.log(`Prime numbers up to ${limitPrime}:`, primeNumbers);

    return (
      <div className="w-100">
        {/* {wordCharData.map((dat) => <div key={dat.id}>{dat.chars }</div> )} */}

        {wordCharData?.map((data) => (
          <div
            key={data.id}
            className="d-flex w-100 card text-center container mt-2 col-12"
          >
            <div className="d-flex  container">
              <h6 className="col">
                {data.id}- {data.name_complex}{" "}
              </h6>
              <h6 className="col">
                {data.id}-{data.translated_name.name}{" "}
              </h6>
            </div>

            <div className="d-flex w-full container">
              <div className="col">
                <p className="col">Verses: {data.verses_count} </p>
                <p className="col">Words: {data.words}</p>
                <p className="col">Chars: {data.chars}</p>
              </div>
              <div className="col">
                <p className="col">
                  Fibonacci length upto {data.verses_count} :
                  {fibonacciLengthUpToLimit(data.verses_count)}
                </p>
                <p className="col">
                  Fibonacci length upto {data.words} :
                  {fibonacciLengthUpToLimit(data.words)}
                </p>
                <p className="col">
                  Fibonacci length upto {data.chars} :
                  {fibonacciLengthUpToLimit(data.chars)}
                </p>
              </div>
            </div>
            <div className="card-body">
              <p className="card-text">
                {" "}
                Primes upto {data.verses_count}:{" "}
                {generatePrimesUpToLimit(data.verses_count)}{" "}
              </p>

              {/* word primes accordian */}
              <div
                className="accordion accordion-flush"
                id="accordionFlushExample"
              >
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingOne">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      Primes upto words count {data.words}
                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <p className="card-text ">
                      Primes upto {data.words}:
                      {generatePrimesUpToLimit(data.words)}
                    </p>
                  </div>
                </div>
              </div>

              {/* word primes accordian end */}

              <p className="card-text">
                Fibonacci upto {data.verses_count} :
                {fibonacciUpToLimit(data.verses_count)}
              </p>
              <p className="card-text">
                Fibonacci upto {data.words} : {fibonacciUpToLimit(data.words)}
              </p>
              <p className="card-text">
                Fibonacci upto {data.chars} : {fibonacciUpToLimit(data.chars)}
              </p>
            </div>
            <div className="card-body">
              <p className="card-text">
                {" "}
                Revelation order: {data.revelation_order}
              </p>
              <p className="card-text">
                Revelation place: {data.revelation_place}
              </p>
            </div>
          </div>
        ))}
      </div>
    );
};

export default RevelationOrderComp;
