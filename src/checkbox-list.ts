import { DataSource } from 'maishu-wuzhui'
import { errors } from './errors';
export async function checkboxList<T>(params: { element: HTMLElement, dataSource: DataSource<T>, nameField?: keyof T, valueField?: keyof T }) {
    if (!params) throw errors.arugmentNull('params')
    if (!params.element) throw errors.argumentFieldNull('params', 'element')
    if (!params.dataSource) throw errors.argumentFieldNull('params', 'dataSource')

    let { dataSource, element, nameField, valueField } = params
    let r = await dataSource.select({})
    r.dataItems.map(o => {
        let label = document.createElement('label')
        let input = document.createElement('input')
        let span = document.createElement('span')

        label.appendChild(input)
        label.appendChild(span)

        let name = nameField ? o[nameField] : o
        let value = valueField ? o[valueField] : o
        input.value = `${value}`
        span.innerHTML = `${name}`

        element.appendChild(label)
    })
}


