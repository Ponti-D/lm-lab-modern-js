// Instructions can be found in rest_parameters.md
export function add(...props) {
  // Add a loop here
return props.reduce((total, num) => total += num)
}
