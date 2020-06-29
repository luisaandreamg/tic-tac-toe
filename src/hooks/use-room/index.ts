import { useEffect, useState } from 'react' //ok
import { useParams } from 'react-router-dom' //ok

import { db } from 'services' //ok
import { Room } from 'typings' //ok

interface Output {
  //ok
  isFetching: boolean //ok
  room?: Room //ok
}

const useRoom = (): Output => {
  //ok
  const { roomId } = useParams() //ok
  const [isFetching, setIsFetching] = useState<boolean>(true) //ok
  const [room, setRoom] = useState<Room | undefined>() //ok

  useEffect(() => {
    //ok
    const unsubscribe = db //ok
      .collection('rooms') //ok
      .doc(roomId) //ok
      .onSnapshot((doc) => {
        //ok
        if (doc.exists) setRoom(doc.data() as Room)
        else console.log('Sala no encontrada') //ok
        if (isFetching) setIsFetching(false) //ok
      })

    return () => {
      //ok
      unsubscribe() //ok
    } //ok
  }, [roomId, isFetching]) //ok

  return { isFetching, room } //ok
} //ok

export default useRoom
