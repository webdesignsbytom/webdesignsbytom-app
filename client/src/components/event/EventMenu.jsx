import React from 'react'

function EventMenu() {
  return (
    <>
    <div>
      <div className='flex m-2 justify-between'>
        <div>
          <h2>Notifications</h2>
        </div>
        {/* <Selector
          handleSelect={handleSelect}
          displayNotifications={displayNotifications}
        /> */}
      </div>
      {/* Notification list */}
      <section className='grid gap-2 mx-2 lg:mx-6'>
        {/* {notifications && notifications.length > 0 ? (
          notifications.map((notification, index) => {
            return (
              <Note
                checkSeen={checkSeen}
                setCheckSeen={setCheckSeen}
                notification={notification}
                notifications={notifications}
                setNotifications={setNotifications}
                key={index}
              />
            );
          })
        ) : (
          <p>Nothing to display</p>
        )} */}
      </section>
    </div>
  </>
  )
}

export default EventMenu