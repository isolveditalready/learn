export default class KanbanAPI {
    static getItems(columnId) {
        console.log("read from getItems")
        const column = read().find(column => column.id == columnId)

        if (!column) {
            return []
        }
        return column.items
    }

    static insertItem(columnId, content ) {
        console.log("read from insertItem")
        const data = read()
        const column = data.find(column => column.id == columnId)
        const item = {
            id: Math.floor(Math.random() * 10000000),
            content
        }

        if (!column) {
            throw new Error("Column does not exist")
        }

        column.items.push(item)
        save(data)

        return item
    }

    static updateItem(itemId, newProps) {
        console.log("read from updateItem")
        const data = read()
        // data.forEach(d => {
        //     if (d.id === itemId) {
        //         d.items.forEach((item,i) => {
        //             console.log(item.id)
        //             if (item.id === newProps.id) {
        //                 item['content'] = newProps['content']
        //             }
        //         })
        //     }
        // })
        console.log(data)
        console.log(`in kanbanAPI, updateITEM: itemId is ${itemId}`)
        console.log('newProps are ' , newProps)
        console.dir(newProps)

        const [currentItemFound, currentColumn] = (() => {
            for (const column of data ) {
                console.log(`column ${column}`)
                console.log("col", column)
                const itemFound = column.items.find(item => item.id == itemId)

                if (itemFound) {
                    console.log("at least found the item")
                    console.log(itemFound)
                    return [itemFound, column]
                } else {
                    console.log("you suck in life")
                }
            }
        })()

        if (!currentItemFound) {
            throw new Error("Item not found")
        }
console.log("here")
        currentItemFound.content = newProps.content === undefined ? currentItemFound.content : newProps.content
        if ( newProps.columnId !== undefined && newProps.position !== undefined) {
            const targetColumn = data.find(column => column.id == newProps.columnId)
            if (!targetColumn ) {
                throw new Error("Target column not found")
            }
            currentColumn.items.splice(currentColumn.items.indexOf(currentItemFound),1)
            targetColumn.items.splice(newProps.position, 0, currentItemFound)
        }

        save(data)
    }

    static deleteItem(itemId) {
        const data = read()

        for (const column of data ) {
            const item = column.items.find(item => item.id == itemId)

            if (item) {
                column.items.splice(column.items.indexOf(item),1)
            }
        }

        save(data)
    }
}


function read() {
    console.log("::::::::::: read")
    const json = localStorage.getItem("kanban-data")

    if (!json) {
        return [
            {
                id: 1,
                items: []
            },
            {
                id: 2,
                items: []
            },
            {
                id: 3,
                items: []
            },
            {
                id: 4,
                items: []
            }
        ]
    }
    return JSON.parse(json)
}

function save(data) {
    localStorage.setItem("kanban-data", JSON.stringify(data))
}