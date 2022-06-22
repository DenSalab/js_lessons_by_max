import React from "react";
import {combineReducers} from "redux";

// интерфейсы нужны для объектов или классов. В них указывается какие ф-ции, св-ва сдержит объект класс
// интерфейсы нужны на этапе разработки

export const MyComponent = () => {
    interface Rect {
        readonly id: string
        isDone?: boolean
        size: {
            width: number
            height: number
        }
    }

    const rect: Rect = {
        id: 'asd2-asd3-sad5-ads6',
        isDone: false,
        size: {
            width: 12,
            height: 12
        }
    }

    const rect3 = {} as Rect; // в дальнейшем объект быдет данного типа;

    interface RectWithArea extends Rect { // интерфейс пишется с боьшой буквы
        getArea: () => number
    }

    const rect5: RectWithArea = {
        id: 'asd',
        size: {
            width: 30,
            height: 20
        },
        getArea(): number {
            return this.size.width * this.size.height
        }
    }

    interface IClock {
        time: Date

        setTime(date: Date): void
    }

    class Clock implements IClock {
        time: Date = new Date();

        setTime(date: Date) {
            this.time = date;
        }
    }

    interface Styles { // для больших динамических объектов.
        [key: string]: string
    }

    const css: Styles = {
        border: '1px solid red',
        borderRadius: '12'
    }

    //------------------------

    // enum - для однотипных элементов

    enum Social {
        VK = 'VK',
        FB = 'FB',
        IN = 'IN',
    }

    const membership = Social.VK
    console.log(membership)


    return (
        <>asd</>
    )
}

export default MyComponent;
