function parseProject(projectString) {
    const project = JSON.parse(projectString);
    printProjectObj(project);
}

function printProjectObj(parsed) {
    console.log(`id: ${parsed.id}`);
    console.log(`completed: ${parsed.completed}`);
    console.log(`title: ${parsed.title}`);
    console.log(`assignees: ${parsed.assignees}`);
}

parseProject(`
  {
    "completed": false,
    "id": "0194fdc2-fa2f-4cc0-81d3-ff12045b73c8",
    "title": "Unfidget the widget",
    "assignees": 14
  }
  `);

parseProject(`
  {
    "completed":true,
    "id":"2f8282cb-e2f9-496f-b144-c0aa4ced56db",
    "title":"Re-spaghettify the codebase - things broke",
    "assignees": 2
  }
  `);
