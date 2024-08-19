import { readFileSync } from 'fs';

const mockData = JSON.parse(readFileSync('../db.json]', 'utf-8'));

export function getAllPolls() {
  return mockData.polls;
}

export function getPollById(pollId: number) {
  return mockData.polls.find((poll) => poll.id === pollId);
}

export function getPollOptions(pollId: number) {
  return getPollById(pollId)?.options;
}

export function getPollOptionById(pollId: number, optionId: number) {
  return getPollOptions(pollId)?.find((option) => option.optionId === optionId);
}
