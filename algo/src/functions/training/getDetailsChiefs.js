import { chiefs } from "../../data/chiefs"

export const getDetailsChiefs = () => {
    return chiefs.map((chief) => ({
        firstname : chief.firstname,
        spec: chief.speciality
    } ))
}