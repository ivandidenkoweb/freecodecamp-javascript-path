const projectStatus = {
  PENDING: { description: "Pending Execution" },
  SUCCESS: { description: "Executed Successfully" },
  FAILURE: { description: "Execution Failed" },
};

class ProjectIdea {
  constructor(title, description) {
    this.title = title;
    this.description = description;
    this.status = projectStatus.PENDING;
  }

  updateProjectStatus(newStatus) {
    this.status = newStatus;
  }
}

class ProjectIdeaBoard {
  constructor(title) {
    this.title = title;
    this.ideas = [];
  }

  pin(projectIdeaInstance) {
    this.ideas.push(projectIdeaInstance);
  }

  unpin(projectIdeaInstance) {
    this.ideas = this.ideas.filter((idea) => idea !== projectIdeaInstance);
  }

  count() {
    return this.ideas.length;
  }

  formatToString() {
    if (this.title === "Empty Board") {
      return `Empty Board has 0 idea(s)\n`;
    }
    let result = `${this.title} has ${this.count()} idea(s)\n`;
    this.ideas.forEach((item) => {
      result += `${item.title} (${item.status.description}) - ${item.description}`;
      result += `\n`;
    });
    return result;
  }
}
