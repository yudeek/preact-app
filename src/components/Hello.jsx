export function Hello(props){

  // const NAME = 'Den';
  // const el = <h1>Hello, {NAME}!</h1>
  const el = <h1>Hello, {props.name}!</h1>

  return el;
}
