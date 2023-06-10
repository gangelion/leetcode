function reverseList(head) { // head is ListNode or null
  let current = head
  let prev = null

  while (current !== null) {
    let tmp = current.next
    current.next = prev
    prev = current
    current = tmp
  }
  return prev
}
