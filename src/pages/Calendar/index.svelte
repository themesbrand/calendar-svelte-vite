<script lang="ts">
  import FullCalendar, { Draggable } from "svelte-fullcalendar";
  import dayGridPlugin from "@fullcalendar/daygrid";
  import interactionPlugin from "@fullcalendar/interaction";
  import BootstrapTheme from "@fullcalendar/bootstrap";

  import {
    Button,
    Card,
    CardBody,
    Col,
    Modal,
    ModalBody,
    Row,
    Container
  } from "sveltestrap";

  //Import Breadcrumb
  import Breadcrumbs from "../../common/Breadcrumb.svelte";
  import DeleteModal from "./DeleteModal.svelte";

  //css
  // import "@fullcalendar/bootstrap/main.css";

  let isOpen: boolean = false;

  let modalcategory: boolean = false;

  let deleteModal: boolean = false;

  let setEvent: any = {};

  let isedit: any = false;
  let setSelectedDay: any = "";

  const toggle = () => {
    isOpen = !isOpen;
    if (!isOpen) {
      setTimeout(() => {
        setEvent = {};

        isedit = false;
      }, 500);
    }
  };

  const toggleCategory = () => {
    modalcategory = !modalcategory;
  };

  const handleEventClick = (arg) => {
    const event: any = arg.event;

    setEvent = {
      id: parseInt(event.id),
      title: event.title,
      title_category: event.title_category,
      start: event.start,
      className: event.classNames,
      category: event.classNames[0],
      event_category: event.classNames[0],
    };

    isedit = true;

    toggle();
  };

  let calendarWeekends: any = true;
  let calendarComponentRef: any;

  const date = new Date();
  const d = date.getDate();
  const m = date.getMonth();
  const y = date.getFullYear();

  let calendarEvents = [
    {
      id: 1,
      title: "Long Event",
      start: new Date(y, m, d - 5),
      end: new Date(y, m, d - 2),
      className: "bg-warning text-white",
    },
    {
      id: 2,
      title: "Repeating Event",
      start: new Date(y, m, d - 3, 16, 0),
      allDay: false,
      className: "bg-info text-white",
    },
    {
      id: 3,
      title: "Repeating Event",
      start: new Date(y, m, d + 4, 16, 0),
      allDay: false,
      className: "bg-primary text-white",
    },
    {
      id: 4,
      title: "Meeting",
      start: new Date(y, m, d, 10, 30),
      allDay: false,
      className: "bg-success text-white",
    },
    {
      id: 5,
      title: "Lunch",
      start: new Date(y, m, d, 12, 0),
      end: new Date(y, m, d, 14, 0),
      allDay: false,
      className: "bg-danger text-white",
    },
    {
      id: 6,
      title: "Birthday Party",
      start: new Date(y, m, d + 1, 19, 0),
      end: new Date(y, m, d + 1, 22, 30),
      allDay: false,
      className: "bg-success text-white",
    },
    {
      id: 7,
      title: "Click for Google",
      start: new Date(y, m, 28),
      end: new Date(y, m, 29),
      url: "http://google.com/",
      className: "bg-dark text-white",
    },
  ];

  function handleDateClick(arg) {
    setSelectedDay = arg;
    toggle();
  }

  let options:any = {
    plugins: [BootstrapTheme, dayGridPlugin, interactionPlugin],
    events: calendarEvents,
    weekends: { calendarWeekends },
    themeSystem: "bootstrap",
    handleWindowResize: true,
    slotDuration: "00:15:00",
    editable: true,
    droppable: true,
    selectable: true,
    headerToolbar: {
      left: "prev,next today",
      center: "title",
      right: "dayGridMonth,dayGridWeek,dayGridDay",
    },
    dateClick: (event : any) => handleDateClick(event.dateStr),
    eventClick: (event : any) => handleEventClick(event),
  };

  const handleValidEventSubmitcategory:any = ({
    target: {
      elements: { category, title },
    },
  }) => {
    const { events } = options;

    const calendarEvents = [
      ...events,
      {
        id: Math.floor(Math.random() * 100),
        title: title.value,
        start: new Date(),
        allDay: false,
        className: category.value + " text-white",
      },
    ];

    options = {
      ...options,
      events: calendarEvents,
    };

    toggleCategory();
  };

  const handleValidEventSubmit:any = ({
    target: {
      elements: { category, title },
    },
  }) => {
    if (isedit) {
      const { events } = options;

      const updateEvent = {
        id: setEvent.id,
        title: title.value,
        className: category.value + " text-white",
        start: setEvent.start,
        allDay: false,
      };
      // update event

      const i = calendarEvents.findIndex((t) => t.id === updateEvent.id);

      calendarEvents[i] = updateEvent;

      calendarEvents = [...events];

      options = {
        ...options,
        events: calendarEvents,
      };
    } else {
      const { events } = options;

      const calendarEvents = [
        ...events,
        {
          id: Math.floor(Math.random() * 100),
          title: title.value,
          start: setSelectedDay ? setSelectedDay : new Date(),
          allDay: false,
          className: category.value + " text-white",
        },
      ];
      options = {
        ...options,
        events: calendarEvents,
      };
    }

    setSelectedDay = "";
    toggle();
  };

  const handleDeleteEvent = () => {
    calendarEvents = calendarEvents.filter((e, i) => i !== setEvent.id);

    calendarEvents = [...calendarEvents];

    options = {
      ...options,
      events: calendarEvents,
    };

    setDeleteModal(false);
    toggle();
  };

  const setDeleteModal = (status) => {
    deleteModal = status;
  };

  const eventData1: any = {
    id: Math.floor(Math.random() * 100),
    title: "New Event Planning",
    start: new Date(),
    allDay: false,
    className: "bg-success text-white",
  };

  const eventData2: any = {
    id: Math.floor(Math.random() * 100),
    title: "Meeting",
    start: new Date(),
    allDay: false,
    className: "bg-info text-white",
  };

  const eventData3: any = {
    id: Math.floor(Math.random() * 100),
    title: "Generating Reports",
    start: new Date(),
    allDay: false,
    className: "bg-warning text-white",
  };

  const eventData4: any = {
    id: Math.floor(Math.random() * 100),
    title: "Create New theme",
    start: new Date(),
    allDay: false,
    className: "bg-danger text-white",
  };
</script>

<DeleteModal
  show={deleteModal}
  onDeleteClick={handleDeleteEvent}
  onCloseClick={() => setDeleteModal(false)}
/>

<div class="page-content">
  <Container fluid>
    <Breadcrumbs title="Apps" breadcrumbItem="Calendar" />

    <Row>
      <Col xs={12}>
        <Row class="mb-4">
          <Col lg={3}>
            <Card class="h-100 mb-lg-0">
              <CardBody>
                <Button
                  color="primary"
                  class="btn font-16 btn-primary w-100"
                  on:click={toggleCategory}
                >
                  <i class="mdi mdi-plus-circle-outline me-1" />
                  Create New Event
                </Button>

                <div id="external-events">
                  <br />
                  <p class="text-muted">
                    Drag and drop your event or click in the calendar
                  </p>

                  <Draggable eventData={eventData1} class="draggable">
                    <div class="bg-success external-event fc-event text-white">
                      <i
                        class="mdi mdi-checkbox-blank-circle font-size-11 me-2"
                      />
                      New Event Planning
                    </div>
                  </Draggable>

                  <Draggable eventData={eventData2} class="draggable">
                    <div class="bg-info external-event fc-event text-white">
                      <i
                        class="mdi mdi-checkbox-blank-circle font-size-11 me-2"
                      />
                      Meeting
                    </div>
                  </Draggable>

                  <Draggable eventData={eventData3} class="draggable">
                    <div class="bg-warning external-event fc-event text-white">
                      <i
                        class="mdi mdi-checkbox-blank-circle font-size-11 me-2"
                      />
                      Generating Reports
                    </div>
                  </Draggable>

                  <Draggable eventData={eventData4} class="draggable">
                    <div class="bg-danger external-event fc-event text-white">
                      <i
                        class="mdi mdi-checkbox-blank-circle font-size-11 me-2"
                      />
                      Create New theme
                    </div>
                  </Draggable>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col class="col-lg-9 app-calendar">
            <Card class="mb-lg-0">
              <CardBody>
                <FullCalendar bind:this={calendarComponentRef} {options} />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Col>
    </Row>

    <Modal {isOpen}>
      <h4 class="modal-header">
        {!!isedit ? "Edit Event" : "Add Event"}
      </h4>
      <ModalBody>
        <form on:submit|preventDefault={handleValidEventSubmit}>
          <Row>
            <Col class="col-12">
              <div class="mb-3">
                <label class="form-label" for="title">Event Name</label>
                <input
                  type="text"
                  class="form-control"
                  name="title"
                  placeholder="Event Name"
                  value={setEvent && setEvent.title ? setEvent.title : ""}
                />
              </div>
            </Col>
            <Col class="col-12">
              <div class="mb-3">
                <label class="form-label" for="category">Category</label>
                <select
                  name="category"
                  class="form-control form-select"
                  placeholder="Select Category"
                  value={setEvent ? setEvent.category : "bg-primary"}
                >
                  <option value="bg-danger">Danger</option>
                  <option value="bg-success">Success</option>
                  <option value="bg-primary">Primary</option>
                  <option value="bg-info">Info</option>
                  <option value="bg-dark">Dark</option>
                  <option value="bg-warning">Warning</option>
                </select>
              </div>
            </Col>
          </Row>
          <Row class="mt-2">
            <Col xs="12" class="text-end">
              {#if !!isedit}
              <button type="button" class="btn btn-danger" 
              on:click={() => setDeleteModal(true)}>Delete</button>
              {/if}
              <button
                type="button"
                class="btn btn-light me-2"
                on:click={toggle}
              >
                Close
              </button>
              <button type="submit" class="btn btn-success save-event">
                Save
              </button>
            </Col>
          </Row>
        </form>
      </ModalBody>
    </Modal>


    <Modal isOpen={modalcategory}>
      <h4 class="modal-header">
        {!!isedit ? "Edit Event" : "Add Event"}
      </h4>
      <ModalBody>
        <form on:submit|preventDefault={handleValidEventSubmitcategory}>
          <Row>
            <Col class="col-12">
              <div class="mb-3">
                <label class="form-label" for="title">Event title</label>

                <input
                  type="text"
                  class="form-control"
                  name="title"
                  placeholder="Event Name"
                  value=""
                />
              </div>
            </Col>
            <Col class="col-12">
              <div class="mb-3">
                <label class="form-label" for="category">Category</label>
                <select
                  name="category"
                  class="form-control form-select"
                  placeholder="Select Category"
                >
                  <option value="bg-danger">Danger</option>
                  <option value="bg-success">Success</option>
                  <option value="bg-primary">Primary</option>
                  <option value="bg-info">Info</option>
                  <option value="bg-dark">Dark</option>
                  <option value="bg-warning">Warning</option>
                </select>
              </div>
            </Col>
          </Row>
          <Row class="mt-2">
            
            <Col xs="12" class="text-end">

              <button
                type="button"
                class="btn btn-light me-2"
                on:click={toggleCategory}
              >
                Close
              </button>

              <button type="submit" class="btn btn-success save-event">
                Save
              </button>
            </Col>
          </Row>
        </form>
      </ModalBody>
    </Modal>
  </Container>
</div>