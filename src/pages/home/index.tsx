import store from '@/model'
import { Button } from 'antd'
import { observer, useLocalObservable } from 'mobx-react-lite'
const Home: React.FC = () => {
  const localStore = useLocalObservable(() => store)
  return (
    <div>
      <Button>Antd</Button>
      <h1>{localStore.count}</h1>
    </div>
  )
}

export default observer(Home)
