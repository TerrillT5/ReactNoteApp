import React, { Component } from 'react'
import FaPencil from 'react-icons/lib/fa/pencil'
import FaTrash from 'react-icons/lib/fa/trash'
import FaFloppyO from 'react-icons/lib/fa/floppy-o'

class Note extends React.Component {
        constructor() {
          super();
            this.state = {
              editing: false
            }
            this.edit = this.edit.bind(this)
            this.save = this.save.bind(this)
            this.remove = this.remove.bind(this)
            this.renderForm = this.renderForm.bind(this)
            this.renderDisplay = this.renderDisplay.bind(this)
        }

          edit() {
            this.setState({
              editing: true
            })
          }

          save(event) {
            event.preventDefault()
            this.props.onChange(this._newText.value, this.props.index)
            this.setState({
              editing: false
            })
          }

          remove() {
              this.props.onRemove(this.props.index)
          }

          renderForm() {
            // ref gets the input of textarea
              return (
                    <div className="renderForm">
                          <form onSubmit={this.save}>
                              <textarea ref={input => this._newText = input}/>
                              <button id="save"><FaFloppyO /></button>
                            </form>
                    </div>
              )
          };

      renderDisplay() {
          return (
                <div className="note">
                  <p>{this.props.children}</p>
                  <span>
                      <button onClick={this.edit} id="edit"><FaPencil /></button>
                      <button onClick={this.remove} id="remove"><FaTrash /></button>
                  </span>
                </div>
          );
      }

      render() {
            return this.state.editing
            ? this.renderForm()
            : this.renderDisplay()
      }
}

export default Note;
