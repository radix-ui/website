export default function Test() {
  return (
    <div>
      <div
        style={{
          textAlign: 'left',
          width: 250,
          margin: '100px auto',
          height: 250,
          overflowX: 'scroll',
          display: 'flex',
          boxSizing: 'border-box',
          border: '1px solid #000',
          scrollSnapType: 'x mandatory',
        }}
      >
        <div
          style={{
            flex: '0 0 66%',
            width: 250,
            backgroundColor: 'red',
            color: '#fff',
            fontSize: 30,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        />
        <div
          style={{
            scrollSnapAlign: 'center',
            flex: '0 0 66%',
            width: 250,
            backgroundColor: 'blue',
            color: '#fff',
            fontSize: 30,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        />
        <div
          style={{
            flex: '0 0 66%',
            width: 250,
            backgroundColor: 'lime',
            color: '#fff',
            fontSize: 30,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        />
      </div>

      <div
        style={{
          textAlign: 'left',
          width: 250,
          margin: '100px auto',
          height: 250,
          overflowX: 'scroll',
          display: 'flex',
          boxSizing: 'border-box',
          border: '1px solid #000',
          scrollSnapType: 'x mandatory',
        }}
      >
        <div style={{ display: 'flex' }}>
          <div
            style={{
              flex: '0 0 66%',
              width: 250,
              backgroundColor: 'red',
              color: '#fff',
              fontSize: 30,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          />
          <div
            style={{
              scrollSnapAlign: 'center',
              flex: '0 0 66%',
              width: 250,
              backgroundColor: 'blue',
              color: '#fff',
              fontSize: 30,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          />
          <div
            style={{
              flex: '0 0 66%',
              width: 250,
              backgroundColor: 'lime',
              color: '#fff',
              fontSize: 30,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          />
        </div>
      </div>
    </div>
  );
}
