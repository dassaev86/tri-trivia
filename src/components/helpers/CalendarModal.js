import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import "./modalStyle.css";
import DateTimePicker from "react-datetime-picker";
import moment from "moment";
import Swal from "sweetalert2";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../../redux/actions/ui";
import {
  cleanActiveEvent,
  eventStartAddNew,
  startEventUpdate,
} from "../../redux/actions/events";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const now = moment().minutes(0).seconds(0).add(1, "hours");
const oneHourLater = now.clone().add(1, "hours");

const initEvent = {
  title: "Evento",
  notes: "",
  start: now.toDate(),
  end: oneHourLater.toDate(),
};

const CalendarModal = () => {
  const [validTitle, setValidTitle] = useState(true);

  const dispatch = useDispatch();

  const { modalOpen } = useSelector((state) => state.ui);
  const { activeEvent } = useSelector((state) => state.calendar);
  console.log(modalOpen);

  const [formValues, setFormValues] = useState(initEvent);

  const { title, notes, start, end } = formValues;

  useEffect(() => {
    if (activeEvent) {
      setFormValues(activeEvent);
    } else {
      setFormValues(initEvent);
    }
  }, [activeEvent]);

  const handleInputChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  const handleCloseModal = () => {
    dispatch(closeModal());
    dispatch(cleanActiveEvent());
    setFormValues(initEvent);
  };

  const handleStartDateChange = (e) => {
    setFormValues({
      ...formValues,
      start: e,
    });
  };

  const handleEndDateChange = (e) => {
    setFormValues({
      ...formValues,
      end: e,
    });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();

    const momentStart = moment(start);
    const momentEnd = moment(end);

    if (momentStart.isSame(momentEnd)) {
      Swal.fire("Error", "La fecha final debe ser mayor", "error");
    }

    if (title.trim().length < 2) {
      return setValidTitle(false);
    }

    if (activeEvent) {
      dispatch(startEventUpdate(formValues));
    } else {
      dispatch(eventStartAddNew(formValues));
    }

    setValidTitle(true);
    setFormValues(initEvent);
    handleCloseModal();
  };

  return (
    <Modal
      isOpen={modalOpen}
      onRequestClose={handleCloseModal}
      style={customStyles}
      closeTimeoutMS={200}
      className='modal'
      overlayClassName='modal-fondo'>
      {/* Contenido del Modal */}

      <h1> {activeEvent ? activeEvent.title : "Nuevo Evento"} </h1>
      <hr />
      <form className='container' onSubmit={handleSubmitForm}>
        <div className='form-group'>
          <label>Fecha y hora inicio</label>
          <DateTimePicker
            onChange={handleStartDateChange}
            value={start}
            className='form-control'
          />
        </div>

        <div className='form-group'>
          <DateTimePicker
            onChange={handleEndDateChange}
            value={end}
            className='form-control'
            minDate={start}
          />
        </div>

        <hr />
        <div className='form-group'>
          <label>Titulo y notas</label>
          <input
            type='text'
            className={`form-control ${!validTitle && "is-invalid"}`}
            placeholder='Título del evento'
            name='title'
            autoComplete='off'
            value={title}
            onChange={handleInputChange}
          />
          <small id='emailHelp' className='form-text text-muted'>
            Una descripción corta
          </small>
        </div>

        <div className='form-group'>
          <textarea
            type='text'
            className='form-control'
            placeholder='Notas'
            rows='5'
            name='notes'
            value={notes}
            onChange={handleInputChange}></textarea>
          <small id='emailHelp' className='form-text text-muted'>
            Información adicional
          </small>
        </div>

        <button type='submit' className='btn btn-outline-primary btn-block'>
          <i className='far fa-save'></i>
          <span> Guardar</span>
        </button>
      </form>

      {/* Fin Contenido del Modal */}
    </Modal>
  );
};

export default CalendarModal;
