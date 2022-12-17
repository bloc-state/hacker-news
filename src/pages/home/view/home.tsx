import { Button, Modal, RadioChangeEvent, Space } from "antd"
import { Radio } from "antd"
import { PostPage } from "../../posts/view/posts"
import { BlocProvider, useBloc } from "@bloc-state/react-bloc"
import { HomeBloc } from "../bloc"
import { useState } from "react"

export const HomePage = () => (
  <BlocProvider bloc={[HomeBloc]}>
    <HomeView />
  </BlocProvider>
)

export const HomeView = () => {
  const [transformer, { emit }] = useBloc(HomeBloc, {
    selector: (data) => data.transformer,
  })

  const [isModalOpen, setIsModalOpen] = useState(false)

  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleOk = () => {
    setIsModalOpen(false)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  const onChange = (e: RadioChangeEvent) => {
    emit((state) =>
      state.ready((data) => {
        data.transformer = e.target.value
      }),
    )
  }
  return (
    <>
      <PostPage />
      <section
        style={{ position: "absolute", left: 0, bottom: 0, padding: "2rem" }}
      >
        <div style={{ padding: "1rem" }}>
          <Button type="primary" size="small" onClick={showModal}>
            Click for description!
          </Button>
        </div>
        <Modal
          title="Bloc Concurrency"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <p>
            The modern Bloc library for Dart comes with powerful concurrent
            event processing. The following demo showcases the different effects 
            of the concurrent(mergeMap), restartable(switchMap), and sequential(concatMap) 
            event transformers.

          </p>
          <p>
            This demo is built with Typescript and the <code>@bloc-state/bloc</code> libray that adheres to the modern Bloc Dart api.
            It is a clone of the hacker-news example from the Jotai state management library for react.
          </p>

          <p>
            Clicking the next arrow will increment the id, which will create an event to fetch a new post for that id. 
            Because the response to the request is quick, a 1 second delay has been added to highlight the different event transformer 
            effects. Click repeatedly with each mode to see how they handle each new event. 
          </p>
        </Modal>
        <Radio.Group onChange={onChange} value={transformer}>
          <Space direction="vertical">
            <Radio value="concurrent">concurrent</Radio>
            <Radio value="restartable">restartable</Radio>
            <Radio value="sequential">sequential</Radio>
          </Space>
        </Radio.Group>
      </section>
    </>
  )
}
