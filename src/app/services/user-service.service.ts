import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, from, retry, tap, throwError } from 'rxjs';

import { User } from '../models/user.model';
import { Contact } from '../models/contact.model';
import { storageService } from './async-storage.service';
import { HttpErrorResponse } from '@angular/common/http';

const ENTITY = 'users'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _users$ = new BehaviorSubject<User[]>([])
  public users$ = this._users$.asObservable()

  private _loggedInUser: User = {
    _id: 'u123',
    fullName: 'Muki Ja',
    coins: 100,
    moves: []
  }

  constructor() {
    const users = JSON.parse(localStorage.getItem(ENTITY) || 'null')
    if (!users || users.length === 0) {
      localStorage.setItem(ENTITY, JSON.stringify(this._createUsers()))
    }
  }

  public getUser() {
    return this._loggedInUser
  }

  public signup(name: string) {
    const userToSave = this._getEmptyUser()
    userToSave.fullName = name

    return from(storageService.post(ENTITY, userToSave))
      .pipe(
        tap(newUser => {
          const users = this._users$.value
          this._users$.next([...users, newUser])
        }),
        retry(1),
        catchError(this._handleError)
      )
  }

  public addMove(contact: Contact, amount: number) { }

  private _getEmptyUser() {
    return {
      _id: '',
      fullName: '',
      coins: 100,
      moves: []
    }
  }

  private _handleError(err: HttpErrorResponse) {
    console.log('err:', err)
    return throwError(() => err)
  }

  private _createUsers() {
    const user1: User = { _id: 'u123', fullName: 'Muki Ja', coins: 100, moves: [] }
    const user2: User = { _id: 'u124', fullName: 'Bobo Ba', coins: 100, moves: [] }

    return [user1, user2]
  }
}

