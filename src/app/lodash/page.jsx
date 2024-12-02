"use client"

import VideoPlayer from "@/components/videoplayer/page"
import _ from "lodash"
import React, { useState } from "react"

const Lodashh = () => {
    const [firstCompare, setFirstCompare] = useState()

    // chunk lodash  :-split vakue to  given order of array 
    let array = ["a", "v", "v"]

    const productCatalog = {
        electronics: {
            phones: [
                { name: 'iPhone 14', price: 999 },
                { name: 'Samsung Galaxy S23', price: 899 }
            ],
            laptops: [
                { name: 'MacBook Pro', price: 1999 },
                { name: 'Dell XPS 13', price: 1299 }
            ]
        },
        furniture: {
            sofas: [
                { name: 'Leather Sofa', price: 999 },
                { name: 'Fabric Sofa', price: 799 }
            ],
            tables: [
                { name: 'Dining Table', price: 499 },
                { name: 'Coffee Table', price: 299 }
            ]
        }
    };
    console.log(productCatalog, "productcatalog>>>>>>>>>>>>>>")
    let newarray = _.chunk(array, 2)
    console.log(newarray, " chunk ?????????")

    // compact lodash :-  remove falsy values
    array = ["a", true, false, 0, 1]
    newarray = _.compact(array)
    console.log(newarray, "compact")

    // concat 
    newarray = _.concat(array, 8, 9, 0)
    console.log(newarray, "concat")

    // difference :-maybe remove specified value that are given && find the difference between two arrays 
    newarray = _.difference(array, [1, 0, "a", true, false])
    console.log(newarray, "difference")

    let secondArray = ["abhimanyu", "sharma", 9, 4, 8]
    let firstArray = ["abhimanyu", 1, 2, 4]
    let difference = _.difference(firstArray, secondArray)

    console.log(difference, "difference <<<<<<<<<<<<")

    // differenceBy method 
    let firstDiffferenceArray = [{ id: 1, name: "abhimanyu", lastname: "sharma" }]
    let secondDifferenveArray = [{ id: 1, name: "abhimanyu", lastname: "sharma" }]
    let thirdDifferenceArray = [{ id: 2, name: "abhimanyu", lastname: "sharma" }]
    console.log(_.differenceBy(firstDiffferenceArray, secondDifferenveArray, "id"), "differenceBy method ")

    // differencewithmethod :-also use to find difference between two array with third value 
    let firstDiffferenceWithArray = [{ id: 1, name: "abhimanyu", lastname: "sharma" }]
    console.log(_.differenceWith(firstDiffferenceWithArray[{ name: "abhay", lastname: "hhjbh" }], _.isEqual))


    // zipmethod for array :-Creates an array of grouped elements, the first of which contains the first elements of the given arrays, the second of which contains the second elements of the given arrays, and so on.


    let firstZiparray = ["name", "lastname"]
    let secondziparray = ["abhimanyu", "sharma"]
    console.log(_.zip(firstZiparray, secondziparray), "zippedArray>>>>>>>>>>>>>>>>>")

    // zipobject :-this is used to convert the values of array to key and value to make object  


    let firstarrayforZipObject = ["name", "lastname"]
    let secondarratforZipObject = ["abhimanyu", "sharma"]
    console.log(_.zipObject(firstarrayforZipObject, secondarratforZipObject), "zipobjectsssssss")

    let path = ["a.b.c", "d.e.f"]
    let values = [3, 4]

    console.log(_.zipObjectDeep(path, values), "zipdeepobject")


    console.log(_.size(firstArray))
    return (

        <>
        </>
    )
}
export default Lodashh;
