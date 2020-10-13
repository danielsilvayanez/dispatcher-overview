import { taskRef } from '../firebase'

export function postTask(data) {
  return taskRef
    .add(data)
    .then((docRef) => {
      const documentId = docRef.id

      taskRef.doc(documentId).update({
        _id: documentId,
      })

      return documentId
    })
    .then((documentId) => {
      return taskRef
        .doc(documentId)
        .get()
        .then((doc) => {
          if (doc.exists) {
            return doc.data()
          }
        })
    })
}

// export function getCards() {
//   return fetchCards()
// }
// export function patchCard(documentId, data) {
//   return cardsRef
//     .doc(documentId)
//     .update(data)
//     .then(() => {
//       return cardsRef
//         .doc(documentId)
//         .get()
//         .then((doc) => {
//           if (doc.exists) {
//             return doc.data()
//           }
//         })
//     })
// }

// function fetchCards() {
//   return cardsRef.get().then((querySnapshot) => {
//     let cardsData = []
//     querySnapshot.forEach((doc) => {
//       cardsData.push(doc.data())
//     })

//     return cardsData
//   })
// }
