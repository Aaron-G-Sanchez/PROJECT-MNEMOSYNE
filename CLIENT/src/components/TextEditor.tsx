import 'quill/dist/quill.snow.css'
import './TextEditorStyles.css'

import Quill from 'quill'
import { useEffect, useRef } from 'react'

const toolBarOptions = [
  [{ header: [1, 2, 3, 4, false] }],
  ['bold', 'italic', 'underline'],
  [{ list: 'ordered' }, { list: 'bullet' }, { list: 'check' }]
]

export const TextEditor = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    const container: HTMLElement | null = containerRef.current
    const editorContainer = container!.appendChild(
      container!.ownerDocument.createElement('div')
    )

    new Quill(editorContainer, {
      theme: 'snow',
      // placeholder: 'Enter prompt here',
      modules: {
        toolbar: toolBarOptions
      }
    })

    return () => {
      container!.innerHTML = ''
    }
  }, [])

  return (
    <>
      <div ref={containerRef} className="editor-container"></div>
    </>
  )
}
