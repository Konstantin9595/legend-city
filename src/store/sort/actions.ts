export const SORT_DEFAULT = "SORT_DEFAULT"
export const SORT_ACTION = "SORT_ACTION"
export const SORT_CATEGORY_ACTION = "SORT_CATEGORY_ACTION"
export const SORT_CONTENT_ACTION = "SORT_CONTENT_ACTION"

export const sortAction = ({actionType, actionValue}:{actionType:string, actionValue: {} }) : {} => {
    switch (actionType) {
        case SORT_CATEGORY_ACTION:
            return {
                type: SORT_ACTION,
                payload: {sortActionEntity: SORT_CATEGORY_ACTION, actionValue }
            }
        case SORT_CONTENT_ACTION:
            return {
                type: SORT_ACTION,
                payload: {sortActionEntity: SORT_CONTENT_ACTION, actionValue }
            }
        default:
            return {
                type: SORT_ACTION,
                payload: {sortActionEntity: SORT_DEFAULT, actionValue }
            }

    }
}